from django import forms
from .models import Postit

class PostItForm(forms.ModelForm):
    class Meta:
        model  = Postit
        fields = ['categoria', 'descricao']