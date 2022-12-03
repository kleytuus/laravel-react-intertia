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
        // TODO: Crear tabla para el CEO hotel
        Schema::create('ceohotel', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('ruc')->unique();
            $table->string('password');
            $table->string('dni')->unique();
            $table->string('name');
            $table->string('lastname');
            $table->string('phone')->nullable();
            $table->string('email')->unique();
            $table->string('reason_social');
            $table->string('address_fiscal');
            $table->string('address_commercial');
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
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
        Schema::dropIfExists('ceohotel');
    }
};
