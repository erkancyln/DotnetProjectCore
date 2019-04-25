using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DotnetProject.Model;

namespace DotnetProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IndexesController : ControllerBase
    {
        private readonly DotnetProjectContext _context;

        public IndexesController(DotnetProjectContext context)
        {
            _context = context;
        }

        // GET: api/Indexes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Index>>> GetIndexes()
        {
            return await _context.Indexes.ToListAsync();
        }

        // GET: api/Indexes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Index>> GetIndex(int id)
        {
            var index = await _context.Indexes.FindAsync(id);

            if (index == null)
            {
                return NotFound();
            }

            return index;
        }

        // PUT: api/Indexes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIndex(int id, Index index)
        {
            if (id != index.ID)
            {
                return BadRequest();
            }

            _context.Entry(index).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IndexExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Indexes
        [HttpPost]
        public async Task<ActionResult<Index>> PostIndex(Index index)
        {
            _context.Indexes.Add(index);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIndex", new { id = index.ID }, index);
        }

        // DELETE: api/Indexes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Index>> DeleteIndex(int id)
        {
            var index = await _context.Indexes.FindAsync(id);
            if (index == null)
            {
                return NotFound();
            }

            _context.Indexes.Remove(index);
            await _context.SaveChangesAsync();

            return index;
        }

        private bool IndexExists(int id)
        {
            return _context.Indexes.Any(e => e.ID == id);
        }
    }
}
