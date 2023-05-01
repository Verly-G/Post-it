from django import forms
from .models import Postit, Categoria

# Essa classe tem o objetivo de criar o formulário do PostIt no HTML.
class PostItForm(forms.ModelForm):
    class Meta:
        model  = Postit
        fields = ['categoria', 'descricao']
        
# A função dessa função é na criação do formulário da Categoria no HTML
class CategoriaForm(forms.ModelForm):
    class Meta:
        model = Categoria
        fields = ['nome']