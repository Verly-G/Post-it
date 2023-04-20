from django.shortcuts import render, redirect
from .models import Categoria, Postit
from .forms import PostItForm

def index (request):
    return render(request, 'index.html')

def criar_post_it(request):

    if request.method == 'POST':
        form = PostItForm(request.POST)
        print(form.is_valid)
        if form.is_valid():
            descricao = form.cleaned_data['descricao']
            categoria = form.cleaned_data['categoria']
            nova_categoria = Categoria(nome=categoria)
            nova_categoria.save()
            postit = Postit(descricao=descricao)
            postit.save() # Salvando no banco de dados
            return redirect('index.html') # redirecionar para a view desejada após o sucesso do formulário
    else:
        form = PostItForm()
    return render(request, 'erro.html', {'form': form})