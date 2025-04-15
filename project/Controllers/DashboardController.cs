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
    public class DashboardController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DashboardController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Dashboard>>> GetDashboards()
        {
            return await _context.Dashboards.Include(d => d.Usuario).ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Dashboard>> GetDashboard(int id)
        {
            var dashboard = await _context.Dashboards
                .Include(d => d.Usuario)
                .FirstOrDefaultAsync(d => d.Id == id);

            if (dashboard == null)
            {
                return NotFound();
            }

            return dashboard;
        }

        [HttpPost]
        public async Task<ActionResult<Dashboard>> CreateDashboard(Dashboard dashboard)
        {
            _context.Dashboards.Add(dashboard);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetDashboard), new { id = dashboard.Id }, dashboard);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateDashboard(int id, Dashboard dashboard)
        {
            if (id != dashboard.Id)
            {
                return BadRequest();
            }

            _context.Entry(dashboard).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DashboardExists(id))
                {
                    return NotFound();
                }
                throw;
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDashboard(int id)
        {
            var dashboard = await _context.Dashboards.FindAsync(id);
            if (dashboard == null)
            {
                return NotFound();
            }

            _context.Dashboards.Remove(dashboard);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DashboardExists(int id)
        {
            return _context.Dashboards.Any(e => e.Id == id);
        }
    }
}