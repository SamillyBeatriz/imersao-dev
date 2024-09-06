let dados = [
    {
        titulo: "while",
        descricao: "A estrutura while é uma ferramenta fundamental em programação, utilizada para criar laços de repetição. Ela permite que um bloco de código seja executado repetidamente enquanto uma determinada condição for verdadeira. Essencialmente, o programa entra em um loop e continua executando as instruções dentro do bloco até que a condição se torne falsa",
        links: ["https://luis-alexandre.com.br/laco-de-repeticao-enquanto-em-algoritmos/#google_vignette", "https://dicasdeprogramacao.com.br/estrutura-de-repeticao-enquanto/#google_vignette"],
        estrutura: [`
            let i = 0;
            while (i < 5) {
                console.log("O valor de i é: " + i);
            i++;
            }
            `,`
            int i = 0;
            while (i < 5) {
                System.out.println("O valor de i é: " + i);
                i++;
            }`,`
            contador = 0
            while contador < 5:
                print(contador)
                contador += 1
            `
        ]

    },
    {
        titulo: "for",
        descricao: "O laço for é outro tipo de estrutura de repetição muito utilizada em programação. Ele é ideal quando você sabe previamente quantas vezes o bloco de código deve ser executado. A sintaxe do for geralmente envolve uma variável de controle que é inicializada, testada em uma condição e incrementada a cada iteração",
        links: ["https://www.devmedia.com.br/conceitos-e-exemplos-do-for-lacos-de-repeticoes-estrutura-da-linguagem-parte-2/18871#:~:text=For%20%E2%80%93%20Usamos%20o%20la%C3%A7o%20for%20quando%20sabemos,a%20seguinte%3A%20for%20%28valor%20inicial%3B%20teste%20booleano%3B%20incremento%29", "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for"],
        estrutura: [`
            for (let i = 1; i <= 10; i++) {
            console.log(i);
            }
            `,`
            for (int i = 1; i <= 10; i++) {
                System.out.println(i);
            }
            }`,`
            frutas = ["maçã", "banana", "laranja"]
            for fruta in frutas:
                print(fruta)
            `
            ]
    },
    {
        titulo: "if",
        descricao: "A estrutura if é fundamental para a tomada de decisões em um programa. Ela permite executar um bloco de código apenas se uma determinada condição for verdadeira. O if é a base para a construção de fluxos de controle mais complexos. Pode ser usada somente com a estrutura if ou em conjunto com a estrutura else",
        links: ["https://www.bing.com/search?pglt=129&q=if+linguagem+de+programação&cvid=d89b64f35fe14e63a130b8f6c10cb6d1&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQABhAMgYIAhAAGEAyBggDEAAYQDIGCAQQABhAMgYIBRAAGEAyBggGEAAYQDIGCAcQABhAMgYICBAAGEDSAQg1ODQ4ajBqMagCALACAA&FORM=ANNTA1&PC=DCTS", "https://noic.com.br/materiais-informatica/curso/basic-02/"],
        estrutura: [`
            let numero = 10;
        
            if (numero > 0) {
                console.log("O número é positivo.");
            } else {
                console.log("O número é negativo ou zero.");
            }`,
        `
            int numero = 12;

            if (numero % 2 == 0) {
                System.out.println("O número é par.");
            } else {
                System.out.println("O número é ímpar.");
            }
        `,
        `
            idade = 18

            if idade >= 18:
                print("Você é maior de idade.")
            else:
                print("Você é menor de idade.")
            `
        ]


    },
    {
        titulo: "function",
        descricao: " ela descreve um conjunto de passos a serem seguidos para realizar uma tarefa específica. Em programação, funções são blocos de código reutilizáveis que podem ser chamados diversas vezes ao longo do seu programa.",
        links: ["https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions", "https://www.devmedia.com.br/funcoes-em-python/37340"],
        estrutura: [
            `
            function somar(a, b) {
                return a + b;
            }`,
            `
            public static int calcularArea(int largura, int altura) {
                return largura * altura;
            }`,
            `
            Em python é usado a palavra def, você pode pesquisar pelo termo para saber mais!
            `
        ]

    },
    {
        titulo: "break",
        descricao: "A palavra-chave break é utilizada para interromper a execução de um loop (como while, for ou do-while) imediatamente. Quando encontrada, o programa sai do loop e continua a execução na próxima linha após o loop.",
        links: ["https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/break", "https://hub.asimov.academy/tutorial/entendendo-o-uso-do-break-em-python/"],
        estrutura: [
            `
            // Encontrar o primeiro número par em um array
            const numeros = [1, 3, 5, 8, 10];
            for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] % 2 === 0) {
                console.log("O primeiro número par é:", numeros[i]);
                break;
            }
            }
            `,
            `
            // Encontrar o primeiro número maior que 5 em um array
            int[] numeros = {1, 3, 5, 8, 10};
            for (int i = 0; i < numeros.length; i++) {
            if (numeros[i] > 5) {
                System.out.println("O primeiro número maior que 5 é: " + numeros[i]);
                break;
            }
            }
            `,
            `
            # Encontrar o primeiro caractere 'a' em uma string
            texto = "Python é uma linguagem de programação"
            for letra in texto:
            if letra == 'a':
                print("O primeiro 'a' foi encontrado.")
                break

            `
        ]
    },
    {
        titulo: "continue",
        descricao: "A palavra-chave continue é utilizada para pular a iteração atual de um loop e passar para a próxima. Isso significa que o restante do código dentro do loop não será executado para aquela iteração específica.",
        links: ["https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/continue", "https://www.w3schools.com/python/ref_keyword_continue.asp"],
        estrutura: [
            `
            // Imprimir os números de 1 a 10, pulando o 5
            for (let i = 1; i <= 10; i++) {
            if (i === 5) {
                continue;
            }
            console.log(i);
            }
            `,
            `
            // Imprimir os números pares de 1 a 10
            for (int i = 1; i <= 10; i++) {
            if (i % 2 != 0) {
                continue;
            }
            System.out.println(i);
            }
            `,
            `
            # Imprimir as palavras de uma lista que não começam com 'a'
            palavras = ["abacate", "banana", "cereja", "damasco"]
            for palavra in palavras:
            if palavra.startswith('a'):
                continue
            print(palavra)
            `
        ]
    },
    {
        titulo: "import",
        descricao: "A palavra-chave import é utilizada para importar funcionalidades de outros módulos. Ela permite que você utilize código de outros arquivos em seu código atual.",
        links: ["https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import", "http://devfuria.com.br/python/imports/"],
        estrutura: [
            `
            Em JavaScript é usado a palavra export, você pode pesquisar pelo termo para saber mais!

            `,
            `
            // arquivo OutraClasse.java
            public class OutraClasse {
                public static void imprimirMensagem() {
                    System.out.println("Mensagem de outra classe");
                }
            }

            // arquivo Principal.java
            import pacote.OutraClasse;

            public class Principal {
                public static void main(String[] args) {
                    OutraClasse.imprimirMensagem();
                }
            }
            `,
            `
            # arquivo modulo.py
            def saudacao():
                print("Olá, mundo!")

            def somar(a, b):
                return a + b

            # arquivo principal.py
            import modulo

            modulo.saudacao()
            resultado = modulo.somar(2, 3)
            print(resultado)
            `
        ]
    }

];


