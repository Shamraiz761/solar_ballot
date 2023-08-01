<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlotsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plots', function (Blueprint $table) {
           CREATE TABLE `plots` (
  `id` bigint unsigned not null auto_increment primary key,
  `plot_no` int not null,
  `plot_code` varchar(150) null,
  `plot_site` varchar(30) null,
  `plot_category` varchar(50) null,
  `tehsil` varchar(200) not null,
  `applicant_type` varchar(30) null,
  `status` int not null default '1',
  `created_at` timestamp null,
  `updated_at` timestamp null
) default character set utf8mb4 collate 'utf8mb4_unicode_ci';

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('plots');
    }
}
