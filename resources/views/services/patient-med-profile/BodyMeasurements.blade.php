@extends('layouts.app')

@section('headExtra')
<script src="js/patient-med-profile.js" charset="utf-8"></script>
@endsection

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <h1>Body Measurements</h1>
			<script type="text/javascript">
				var name = "Body Measurements";
				Start(Main, name, name);
			</script>
			<div id="content"></div>
        </div>
    </div>
</div>
@endsection
