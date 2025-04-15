using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace YourProject.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Nome { get; set; } = string.Empty;

        [Required]
        [EmailAddress]
        [StringLength(100)]
        public string Email { get; set; } = string.Empty;

        [Required]
        [StringLength(100)]
        public string Senha { get; set; } = string.Empty;

        public virtual ICollection<Transacao> Transacoes { get; set; }

        public bool Endividado { get; set; }

        public User()
        {
            Transacoes = new List<Transacao>();
        }
    }
}