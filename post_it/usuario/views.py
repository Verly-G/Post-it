from django.shortcuts import render, redirect
from .models import Categoria, Postit
from .forms import PostItForm
from django.http import JsonResponse
from django.core.serializers import serialize

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
    postit.delete()
    return JsonResponse("Foi excluído", safe=False)