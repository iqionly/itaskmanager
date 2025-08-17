@extends('base')

@section('content')
    <header>

    </header>
    @include('menu-module::layout')
    <section class="bg-gray-700 h-screen flex flex-col">
        <div class="flex-1 p-4 flex space-x-4 overflow-x-auto">
            @include('task-module::card-task')
        </div>
    </section>
    <footer>

    </footer>
@endsection