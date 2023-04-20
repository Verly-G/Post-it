from django.db import models

class Categoria(models.Model):
    nome = models.CharField(max_length=20)
    
    def __str__(self):
        return '%s - %s' % (self.nome)

class Postit(models.Model):
    descricao = models.CharField(max_length=250)
    data = models.DateField()
    categoria = models.ForeignKey(Categoria, on_delete=models.RESTRICT)
    
    def __str__(self):
        return '%s - %s' % (self.descricao)
