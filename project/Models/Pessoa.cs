using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace YourProject.Models
{
    public class Pessoa
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        public string Nome { get; set; } = string.Empty;
        
        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;
        
        [Required]
        public string Senha { get; set; } = string.Empty;
        
        public List<Transacao> Transacoes { get; set; }
        public bool Endividado { get; set; }

        public Pessoa()
        {
            Transacoes = new List<Transacao>();
        }

        public void Cadastrar() { }
        public void Login() { }
        public void GetId() { }
        public void GetNome() { }
        public void GetEmail() { }
        public void GetSenha() { }
        public void SetNome(string nome) { }
        public void SetEmail(string email) { }
        public void SetSenha(string senha) { }
        public void GetTransacoes() { }
        public void SetTransacoes(List<Transacao> transacoes) { }
    }
}