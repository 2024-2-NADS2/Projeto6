using System;

class EcoMaterialize
{
    static void Main()
    {
        int n = 0;

        Console.WriteLine("Quantos livros você deseja pegar?");
        n = Convert.ToInt32(Console.ReadLine());

        for (int i = 0; i < n; i++)
        {
            Console.WriteLine("Você tem algum tipo de livro em mente?");
            string resposta = Console.ReadLine().ToLower();

            if (resposta == "não")
            {
                Console.WriteLine("Você será direcionado para a página principal.");
                break;
            }

            if (resposta == "sim")
            {
                Console.WriteLine("Digite qual tipo de material você deseja pegar(escolar/tecnologia/estrangeiro/his:");
                string tipoMaterial = Console.ReadLine().ToLower();

                switch (tipoMaterial)
                {
                    case "escolar":
                        Console.WriteLine("Você será direcionado para a aba de material escolar.");
                        break;
                    case "tecnologia":
                        Console.WriteLine("Você será direcionado para a aba de material tecnológico.");
                        break;
                    case "estrangeiro":
                        Console.WriteLine("Você será direcionado para a aba de material estrangeiro.");
                        break;
                    case "historia":
                        Console.WriteLine("Você será direcionado para a aba de livros com história.");
                        Console.WriteLine("Você tem preferência de gênero? (sim/não)");
                        string generoResposta = Console.ReadLine().ToLower();

                        if (generoResposta == "não")
                        {
                            Console.WriteLine("Você será direcionado para a aba principal de livros com história.");
                        }
                        else if (generoResposta == "sim")
                        {
                            Console.WriteLine("Qual gênero você prefere? (terror/narrativo/ação/romance)");
                            string genero = Console.ReadLine().ToLower();

                            switch (genero)
                            {
                                case "terror":
                                    Console.WriteLine("Você será direcionado para a aba de terror.");
                                    break;
                                case "narrativo":
                                    Console.WriteLine("Você será direcionado para a aba de narrativo.");
                                    break;
                                case "ação":
                                    Console.WriteLine("Você será direcionado para a aba de ação.");
                                    break;
                                case "romance":
                                    Console.WriteLine("Você será direcionado para a aba de romance.");
                                    break;
                                default:
                                    Console.WriteLine("Gênero não encontrado. Voltando para a aba principal.");
                                    break;
                            }
                        }
                        break;
                    default:
                        Console.WriteLine("Tipo de material não reconhecido. Voltando para a página principal.");
                        break;
                }
            }
        }

        Console.WriteLine("Execução finalizada. Obrigado!");
    }
}
