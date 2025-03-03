<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RateController extends Controller
{
    public function handle(Request $request)
    {
        $roomNumber = $request->input('room_number');
        // Define the base URL for your Next.js app
        $baseUrl = 'http://localhost:3000/';

        // Map room numbers to full URLs of Next.js routes
        $roomPages = [
            "1"  => $baseUrl . "paris",
            "2"  => $baseUrl . "tokyo",
            "3"  => $baseUrl . "york",
            "4"  => $baseUrl . "dubai",
            "5"  => $baseUrl . "london",
            "6"  => $baseUrl . "sydney",
            "7"  => $baseUrl . "rome",
            "8"  => $baseUrl . "cairo",
            "9"  => $baseUrl . "berlin",
            "10" => $baseUrl . "bangkok"
        ];

        if (array_key_exists($roomNumber, $roomPages)) {
            return response($roomPages[$roomNumber]);
        } else {
            return response("Invalid room number!", 400);
        }
    }
}
