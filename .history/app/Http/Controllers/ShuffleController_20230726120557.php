<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class ShuffleController extends Controller
{
    public function index(Request $request)
    {
        $filteredApplicants = $request->input('filteredApplicants');

        // Process the filtered applicants data as needed

        // Return the Inertia view
        return Inertia::render('Shuffle', [
            'filteredApplicants' => $filteredApplicants,
        ]);
    }
}
