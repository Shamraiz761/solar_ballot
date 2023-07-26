<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\applicants;
use Illuminate\Http\Request;

use function PHPSTORM_META\map;

class ApplicantsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $applicants = applicants::all();
        return Inertia::render("BallotingType", [
            'applicants' => $applicants->map(function ($applicant) {
                return [
                    'id' => $applicant->id,
                    'applicant_name' => $applicant->applicant_name,
                    'cnic_no' => $applicant->cnic_no,
                    'mobile' => $applicant->mobile,
                    'tehsil' => $applicant->tehsil,

                    
                ];
            })
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\applicants  $applicants
     * @return \Illuminate\Http\Response
     */
    public function show(applicants $applicants)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\applicants  $applicants
     * @return \Illuminate\Http\Response
     */
    public function edit(applicants $applicants)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\applicants  $applicants
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, applicants $applicants)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\applicants  $applicants
     * @return \Illuminate\Http\Response
     */
    public function destroy(applicants $applicants)
    {
        //
    }
}
