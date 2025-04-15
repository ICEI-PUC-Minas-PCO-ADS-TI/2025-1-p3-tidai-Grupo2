using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using YourProject.Models;
using YourProject.Data;

namespace YourProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MetaFinanceiraController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public MetaFinanceiraController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MetaFinanceira>>> GetMetasFinanceiras()
        {
            return await _context.MetasFinanceiras.Include(m => m.Usuario).ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MetaFinanceira>> GetMetaFinanceira(int id)
        {
            var metaFinanceira = await _context.MetasFinanceiras
                .Include(m => m.Usuario)
                .FirstOrDefaultAsync(m => m.Id == id);

            if (metaFinanceira == null)
            {
                return NotFound();
            }

            return metaFinanceira;
        }

        [HttpPost]
        public async Task<ActionResult<MetaFinanceira>> CreateMetaFinanceira(MetaFinanceira metaFinanceira)
        {
            _context.MetasFinanceiras.Add(metaFinanceira);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetMetaFinanceira), new { id = metaFinanceira.Id }, metaFinanceira);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMetaFinanceira(int id, MetaFinanceira metaFinanceira)
        {
            if (id != metaFinanceira.Id)
            {
                return BadRequest();
            }

            _context.Entry(metaFinanceira).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MetaFinanceiraExists(id))
                {
                    return NotFound();
                }
                throw;
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMetaFinanceira(int id)
        {
            var metaFinanceira = await _context.MetasFinanceiras.FindAsync(id);
            if (metaFinanceira == null)
            {
                return NotFound();
            }

            _context.MetasFinanceiras.Remove(metaFinanceira);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MetaFinanceiraExists(int id)
        {
            return _context.MetasFinanceiras.Any(e => e.Id == id);
        }
    }
}