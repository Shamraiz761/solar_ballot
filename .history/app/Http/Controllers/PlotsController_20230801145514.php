<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\plots;
use Illuminate\Http\Request;

class PlotsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $applicants = plots::all();
        return Inertia::render("BallotingType", [
            'plots' => $applicants->map(function ($applicant) {
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
     * @param  \App\Models\plots  $plots
     * @return \Illuminate\Http\Response
     */
    public function show(plots $plots)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\plots  $plots
     * @return \Illuminate\Http\Response
     */
    public function edit(plots $plots)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\plots  $plots
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, plots $plots)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\plots  $plots
     * @return \Illuminate\Http\Response
     */
    public function destroy(plots $plots)
    {
        //
    }
}
