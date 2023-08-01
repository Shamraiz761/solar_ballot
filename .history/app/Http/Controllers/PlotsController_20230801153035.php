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
        $plots = plots::all();
        dd($plots)
        return Inertia::render("BallotingType", [
            'plots' => $plots->map(function ($plot) {
                return [
                    'id' => $plot->id,
                    'plot_no' => $plot->plot_no,
                    'plot-code' => $plot->plot_code,
                    'plot_site' => $plot->plot_site,
                    'plot_category' => $plot->plot_category,
                    'tehsil' => $plot->tehsil,


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
