<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EmailController extends Controller
{
    public function store(Request $request)
    {
        $email = $request->input('email');

        // Use the Query Builder to insert the email into the subscribers table
        DB::table('subscribers')->insert([
            'email' => $email
           
        ]);

        // Return a simple success response
        return response('Email submitted successfully.', 200);
    }
}
