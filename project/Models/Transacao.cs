using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace YourProject.Models
{
    public class Transacao
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        public string Descricao { get; set; } = string.Empty;
        
        public double Valor { get; set; }
        
        [Required]
        public string Tipo { get; set; } = string.Empty; // "Receita" ou "Despesa"
        
        public DateTime Data { get; set; }
        
        [Required]
        public Pessoa Usuario { get; set; } = null!;

        public void RegistrarTransacao() { }
        public void ExcluirTransacao() { }
        public void GetId() { }
        public void GetValor() { }
        public void SetDescricao(string descricao) { }
        public void GetDescricao() { }
        public void SetValor(double valor) { }
        public void GetTipo() { }
        public void SetTipo(string tipo) { }
    }
}