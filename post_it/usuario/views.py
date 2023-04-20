from django.shortcuts import render, redirect
from .models import Categoria, Postit
from .forms import PostItForm

def index (request):
    return render(request, 'index.html')

def criar_post_it(request):
    if request.method == 'POST':
        form = PostItForm(request.POST)
        if form.is_valid():
            descricao = form.cleaned_data['descricao']
            categoria = form.cleaned_data['categoria']
            postit = Postit(descricao=descricao, categoria =categoria)
            nova_categoria = Categoria(nome=categoria)
            postit.save() # Salvando no banco de dados
            nova_categoria.save()
            return redirect('index.html') # redirecionar para a view desejada após o sucesso do formulário
    else:
        form = PostItForm()
    return render(request, 'erro.html', {'form': form})