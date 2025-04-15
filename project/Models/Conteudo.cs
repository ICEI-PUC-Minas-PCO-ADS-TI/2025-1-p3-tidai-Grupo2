using System;
using System.ComponentModel.DataAnnotations;

namespace YourProject.Models
{
    public class Conteudo
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        public string Titulo { get; set; } = string.Empty;
        
        [Required]
        public string Descricao { get; set; } = string.Empty;
        
        [Required]
        public string Tipo { get; set; } = string.Empty; // "Receita" ou "Economia"
        
        [Required]
        public string Nivel { get; set; } = string.Empty; // "Iniciante" ou "Avançado"

        public void GetId() { }
        public void GetConteudo() { }
        public void SetConteudo(string conteudo) { }
        public void GetDescricaoConteudo(string conteudo) { }
    }
}