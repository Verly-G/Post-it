from django import forms
from .models import Categoria, Postit

class PostItForm(forms.Form):
    descricao = forms.CharField(max_length=250)
    categoria = forms.ModelChoiceField(queryset=Categoria.objects.all())