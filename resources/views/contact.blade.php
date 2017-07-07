@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <h1> @lang('nav.Contact Us') </h1>

            <div class="qr-code pull-left">
                <?php
                $png = QrCode::format('png')
                                ->size(256)
                                ->margin(0)
                                ->backgroundColor(235,235,235)
                                ->merge('/public/img/512x512.png')
                                ->generate(Request::url());
                $png = base64_encode($png);
                ?>
                <img class="small-qr" src="data:image/png;base64,{{ $png }}" alt="" data="Contact"/>
                <div class="big-qr" id="big-qrContact" style="display: none;">
                    <img src="data:image/png;base64,{{ $png }}" alt="" />
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
