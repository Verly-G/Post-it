from django.shortcuts import render, redirect
from .models import Categoria, Postit
from .forms import PostItForm
from django.http import JsonResponse
from django.core.serializers import serialize
import json

def index (request):
    PostIfform = PostItForm()
    if request.method == 'POST':
        PostIfform = PostItForm(request.POST)
        if PostIfform.is_valid():
            PostIfform.save()
            PostIfform = PostItForm()
        
    context={
        'form': PostIfform,
        'posts': Postit.objects.all(),
        'categorias': Categoria.objects.all() 
    }
    return render(request, 'index.html', context)

def excluir(request, id):
    postit = Postit.objects.get(id=id)
    print(postit)
    postit.delete()
    return JsonResponse("Foi excluído", safe=False)

# def alterar(request, id):
    


def buscar(request, id):
    post = Postit.objects.get(id=id)
    categorias = Categoria.objects.all()
    listaCategorias = []
    for categoria in categorias:
        listaCategorias.append(categoria)

    context={
        'categoria': listaCategorias,
        'post_descricao': post.descricao
    }
    
    return JsonResponse(context, safe=False)