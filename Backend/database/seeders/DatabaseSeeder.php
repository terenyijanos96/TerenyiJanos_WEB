<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        \App\Models\Tema::factory()->create([
            'temanev' => 'Állatok',
        ]);

        \App\Models\Tema::factory()->create([
            'temanev' => 'Színek',
        ]);

        \App\Models\Szavak::factory()->create([
            "angol" => "Dog",
            "magyar" => "Kutya",
            "temaId" => 1,
        ]);

        \App\Models\Szavak::factory()->create([
            "angol" => "Cat",
            "magyar" => "Macska",
            "temaId" => 1,
        ]);

        \App\Models\Szavak::factory()->create([
            "angol" => "Blue",
            "magyar" => "Kék",
            "temaId" => 2,
        ]);

        \App\Models\Szavak::factory()->create([
            "angol" => "Green",
            "magyar" => "Zöld",
            "temaId" => 2,
        ]);
    }
}
