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

Route::post('/shuffle', function () {
    $filteredApplicants = request()->input('filteredApplicants');

    // Process the data as needed and return a response
    // For example, you can pass the data to the "Shuffle" view

    return Inertia::render('Shuffle', [
        'filteredApplicants' => $filteredApplicants,
    ]);
});
