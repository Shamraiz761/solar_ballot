<?php

use App\Http\Controllers\ApplicantsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::resource('/', ApplicantsController::class);
Route::get('/draw', function () {
    return Inertia::render("Draw");
});

Route::post('/shuffle', function () {

    $filteredApplicants = request()->input('filteredApplicants');
    dd(request()->all());

    return Inertia::render('Shuffle', [
        'filteredApplicants' => $filteredApplicants,
    ]);
});
