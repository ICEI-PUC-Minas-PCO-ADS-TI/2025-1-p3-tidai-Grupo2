using System;
using System.ComponentModel.DataAnnotations;

namespace YourProject.Models
{
    public class Dashboard
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        public Pessoa Usuario { get; set; } = null!;
        
        public double SaldoTotal { get; set; }
        public double InvestimentoTotal { get; set; }

        public void AgregarSaldo() { }
        public void AgregarDados() { }
        public void GetSaldoMensal(DateTime data) { }
        public void GetDadosMensais(DateTime data) { }
        public void GetGastosMensais(DateTime data, string gastosMensais) { }
        public void GetInvestimentosMensais(DateTime data, double investimento) { }
        public void SetInvestimentoTotal(double investment) { }
    }
}