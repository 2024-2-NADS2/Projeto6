using System;

class EcoMaterialize
{
    private string ecoMaterialize;
    private string escolar;
    private string estrangeiro;
    private string historia;
    private string tecnologia;

    public string GetEcoMaterialize()
    {
        return ecoMaterialize;
    }
    public string GetEscolar()
    {
        return escolar;
    }
    public string GetEstrangeiro()
    {
        return estrangeiro;
    }
    public string GetHistoria()
    {
        return historia;
    }
    public string GetTecnologia()
    {
        return tecnologia;
    }

    public void SetEcoMaterialize(string novaEcoMaterialize)
    {
        ecoMaterialize = novaEcoMaterialize;
    }
    public void SetEscolar(string novaEscolar)
    {
        escolar = novaEscolar;
    }
    public void SetEstrangeiro(string novoEstrangeiro)
    {
        estrangeiro = novoEstrangeiro;
    }
    public void SetHistoria(string novaHistoria)
    {
        historia = novaHistoria;
    }
    public void SetTecnologia(string novaTecnologia)
    {
        tecnologia = novaTecnologia;
    }

    public EcoMaterialize(string novaEcoMaterialize, string novaEscolar, string novoEstrangeiro, string novaHistoria, string novaTecnologia)
    {
        ecoMaterialize = novaEcoMaterialize;
        escolar = novaEscolar;
        estrangeiro = novoEstrangeiro;
        historia = novaHistoria;
        tecnologia = novaTecnologia;
    }

    public void Requisitos()
    {
        Console.WriteLine("EcoMaterialize: {0}, Escolar: {1}, Estrangeiro: {2}, História: {3}, Tecnologia: {4}",
                          GetEcoMaterialize(), GetEscolar(), GetEstrangeiro(), GetHistoria(), GetTecnologia());
    }
}

class HelloWorld
{
    static void Main()
    {
        int n = 3;  

        string ecoMaterialize = "Material sustentável";
        string escolar = "Livro didático";
        string estrangeiro = "Livro em inglês";
        string historia = "Livro de história mundial";
        string tecnologia = "Livro sobre programação";

        for (int i = 0; i < n; i++)
        {
            EcoMaterialize livro = new EcoMaterialize(
                ecoMaterialize + " " + (i + 1),
                escolar + " " + (i + 1),
                estrangeiro + " " + (i + 1),
                historia + " " + (i + 1),
                tecnologia + " " + (i + 1)
            );

            livro.Requisitos();
        }
    }
}
