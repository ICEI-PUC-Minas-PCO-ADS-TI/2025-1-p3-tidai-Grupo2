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
    public class ConteudoController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ConteudoController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Conteudo>>> GetConteudos()
        {
            return await _context.Conteudos.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Conteudo>> GetConteudo(int id)
        {
            var conteudo = await _context.Conteudos.FindAsync(id);

            if (conteudo == null)
            {
                return NotFound();
            }

            return conteudo;
        }

        [HttpPost]
        public async Task<ActionResult<Conteudo>> CreateConteudo(Conteudo conteudo)
        {
            _context.Conteudos.Add(conteudo);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetConteudo), new { id = conteudo.Id }, conteudo);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateConteudo(int id, Conteudo conteudo)
        {
            if (id != conteudo.Id)
            {
                return BadRequest();
            }

            _context.Entry(conteudo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ConteudoExists(id))
                {
                    return NotFound();
                }
                throw;
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteConteudo(int id)
        {
            var conteudo = await _context.Conteudos.FindAsync(id);
            if (conteudo == null)
            {
                return NotFound();
            }

            _context.Conteudos.Remove(conteudo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ConteudoExists(int id)
        {
            return _context.Conteudos.Any(e => e.Id == id);
        }
    }
}