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
        // TODO: Crear tabla para el hotel
        Schema::create('hotel', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->binary('photo');
            $table->string('name');
            $table->string('country');
            $table->string('departament');
            $table->string('district');
            $table->string('street');
            $table->string('reference')->nullable();
            $table->string('phone');
            $table->string('service');
            $table->string('payment');
            $table->string('ruc')->unique();
            $table->string('email')->unique();
            $table->string('web')->nullable();
            $table->string('facebook')->nullable();
            // Crear una clave foránea para llamar al id del hotel
            $table->unsignedBigInteger('ceohotel_id');
            $table->foreign('ceohotel_id')->references('id')->on('ceohotel');
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
        Schema::dropIfExists('hotel');
    }
};
