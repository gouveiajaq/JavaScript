while (troca == 1)
    {
        troca = 0; 
    }
        for (i = 0; i <= 3; i++)
        {
            if (numero[i] > numero[i + 1])
            {
                troca = 1;
                aux = numero[i];
                numero[i] = numero[i + 1];
                numero[i + 1] = aux;
            }
        }