using System;

    class HelloWorld
    {
        static void Main()
        {
            int n = 0;
            string ecoMaterialize = "";
            string escolar = "";
            string estrangeiro = "";
            string historia = "";
            string tecnologia = "";

            Console.WriteLine("Quantos livros voc� deseja pegar ?");
            n = Convert.ToInt32(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                Console.WriteLine("Voc� tem algum tipo de livro em mente?");
                string resposta = Console.ReadLine().ToLower();

                if (resposta == "n�o")
                {
                    Console.WriteLine("Voc� ser� direcionado para a p�gina principal");
                    break;
                }

                if (resposta == "sim")
                {
                    Console.WriteLine("Digite qual tipo de material voc� deseja pegar?");
                    string tipoMaterial = Console.ReadLine().ToLower();

                    if (tipoMaterial == "escolar")
                    {
                        Console.WriteLine("Voc� ser� direcionado para a aba de material escolar");
                    }
                    else if (tipoMaterial == "tecnologia")
                    {
                        Console.WriteLine("Voc� ser� direcionado para a aba de material tecnol�gico");
                    }
                    else if (tipoMaterial == "estrangeiro")
                    {
                        Console.WriteLine("Voc� ser� direcionado para a aba de material estrangeiro");
                    }
                    else if (tipoMaterial == "historia")
                    {
                        Console.WriteLine("Voc� ser� direcionado para a aba de livros com hist�ria");
                        Console.WriteLine("Voc� tem prefer�ncia de g�nero? (sim/n�o)");
                        string generoResposta = Console.ReadLine().ToLower();

                        if (generoResposta == "n�o")
                        {
                            Console.WriteLine("Voc� ser� direcionado para a aba principal de livros com hist�ria");
                        }
                        else if (generoResposta == "sim")
                        {
                            Console.WriteLine("Qual g�nero voc� prefere? (terror/narrativo/a��o/romance)");
                            string genero = Console.ReadLine().ToLower();

                            if (genero == "terror")
                            {
                                Console.WriteLine("Voc� ser� direcionado para a aba de terror");
                            }
                            else if (genero == "narrativo")
                            {
                                Console.WriteLine("Voc� ser� direcionado para a aba de narrativo");
                            }
                            else if (genero == "a��o")
                            {
                                Console.WriteLine("Voc� ser� direcionado para a aba de a��o");
                            }
                            else if (genero == "romance")
                            {
                                Console.WriteLine("Voc� ser� direcionado para a aba de romance");
                            }
                        }
                    }

                    EcoMaterialize selecionado = new EcoMaterialize(ecoMaterialize, escolar, estrangeiro, historia, tecnologia);
                    selecionado.Requisitos();
                }
            }
        }
    }
    