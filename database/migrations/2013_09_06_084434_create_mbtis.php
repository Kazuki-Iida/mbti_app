<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mbtis', function (Blueprint $table) {
            $table->id();
            $table->string('name', 4);
            $table->char('first_letter', 1);
            $table->char('second_letter', 1);
            $table->char('third_letter', 1);
            $table->char('fourth_letter', 1);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mbtis');
    }
};
