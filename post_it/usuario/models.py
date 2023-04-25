from django.db import models

class Categoria(models.Model):
    nome = models.CharField(max_length=20, verbose_name='categoria')
    
    def __str__(self):
        return self.nome

class Postit(models.Model):
    descricao = models.CharField(max_length=250, verbose_name='descricao_postit')
    data = models.DateField(auto_now_add=True, verbose_name='data')
    categoria = models.ForeignKey(
        Categoria, verbose_name='categoria', on_delete=models.RESTRICT
    )
    
    def __str__(self):
        return self.descricao
