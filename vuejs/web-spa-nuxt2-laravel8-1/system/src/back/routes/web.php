<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/vue', function () {
    return view('vue3');
});

Route::get('/openai', function () {
    return view('openai');
});

//PHP
//Route::get('/openai', [App\Http\Controllers\OpenAIController::class, 'index']);
Route::get('/openaiweb1', [App\Http\Controllers\OpenAIController::class, 'callApiByOpenAIPhp']);
Route::post('/openaiedit', [App\Http\Controllers\OpenAIController::class, 'callEditApiByOpenAiPhp']);


Route::get('/', function () {
    return view('welcome');
});

#Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
