<?php

use App\Http\Controllers\ApplicantsController;
use App\Http\Controllers\PlotsController;
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

Route::resource('/', PlotsController::class);


Route::get('/draw', function () {
    $filteredApplicants = request()->input('drawApplicants', '[]');
    return Inertia::render("Draw", [
        "filteredApplicants" => $filteredApplicants,
    ]);
});

Route::get('/shuffleApplicants', function () {

    $shuffleApplicants = request()->input('shuffleApplicants');
    return Inertia::render('ShuffleApplicants', [
        'shuffleApplicants' => $shuffleApplicants,
    ]);
});

Route::get('/shufflePlots', function () {
    return Inertia::render('ShufflePlots');
});

Route::get('/shuffle', function () {

    $filteredApplicants = request()->input('filteredApplicants');

    return Inertia::render('Shuffle', [
        'filteredApplicants' => $filteredApplicants,
    ]);
});
