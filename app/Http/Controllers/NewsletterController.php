<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NewsletterController extends Controller
{
    public function subscribe(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $email = $request->input('email');

        // Insert into the database
        DB::table('subscribers')->insert([
            'email' => $email,
        ]);

        return response()->json(['message' => 'Email submitted successfully.'], 200);
    }
}
