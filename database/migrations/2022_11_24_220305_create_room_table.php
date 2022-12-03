<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // TODO: Crear tabla para las habitaciones
        Schema::create('room', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('type');
            $table->binary('photo');
            $table->string('tariff');
            $table->string('number');
            $table->string('floor');
            // Crear una clave foránea para llamar al id del hotel
            $table->unsignedBigInteger('hotel_id');
            $table->foreign('hotel_id')->references('id')->on('hotel');
            //
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('room');
    }
};
