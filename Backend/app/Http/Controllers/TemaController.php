<?php

namespace App\Http\Controllers;

use App\Models\Tema;
use Illuminate\Http\Request;

class TemaController extends Controller
{

    public function index()
    {
        return response()->json(Tema::all());

    }
    
    public function szavakkal()
    {
        return Tema::with("szavak")->get();

    }
}
