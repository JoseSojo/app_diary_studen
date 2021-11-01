<div class="container-fluid my-5" id="diary">
	<div class="row">
		<div class="col-11 col-md-4 mt-4">
			<!-- Search Noti -->
			<div class="card p-0 mb-3">
				<div class="card-header lead">
					Buscar Nota
				</div>
				<div class="card-body py-5">
					<form class="d-flex" autocomplete="off">
						<input type="text" class="form-control border-dark shadow-none rounded-0" placeholder="Buscar Notas" id="search-diary">
						<i class="bi-search center-xy col-3 col-md-2 center-xy bg-dark text-light lead"></i>
					</form>
				</div>
				<div class="card-footer">
					<ul id="diary-search-result"></ul>
				</div>
			</div>	
			<!-- SAVE NOTI -->
			<div class="card p-0">
				<div class="card-header lead">
					Guarda en la Agenda
				</div>
				<div class="card-body">
					<form id="save-noti" autocomplete="off">
						<div class="form-group d-flex">
							<i class="bi-chat-right-text-fill center-xy col-2 col-md-3 bg-light"></i>
							<input type="text" class="form-control shadow-none rounded-0" placeholder="Nota" id="noti-title">
						</div>
						<div class="form-group d-flex my-3">
							<!-- INPUT DAY -->
							<input type="number" class="form-control rounded-0 shadow-none" placeholder="dia" id="noti-day">
							<!-- INPUT MONTH -->
							<input type="number" class="form-control rounded-0 shadow-none" placeholder="mes" id="noti-month">
							<!-- INPUT YEAR -->
							<input type="number" class="form-control rounded-0 shadow-none" placeholder="año" id="noti-year">
						</div>
						<div class="form-group d-flex mt-2">
							<button type="submit" class="btn btn-outline-dark rounded-0 shadow-none btn-block w-100 disabled" id="noti-submit">
								Guardar en la Agenda
								<i class="bi-check-circle-fill lead"></i>
							</button>
						</div>
					</form>
				</div>
				<div class="card-footer">
					<div class="alert alert-success" id="alert-save-noti"></div>
				</div>
			</div>
		</div>
		
			<!-- See Noti -->
		<div class="col-12 col-md-8 mt-4">
			<div class="alert alert-danger" id="alert-delete-noti"></div>
			<table class="table table-sm table-bordered table-striped text-center">
				<thead>
					<tr>
						<td class="lead">
							<span>
								Titulo
							</span>
						</td>
						<td class="lead">
							<span>
								Guardo el...
							</span>
						</td>
						<td class="lead">
							<span>
								Hasta...
							</span>
						</td>
						<td class="lead">
							<button class="btn btn-sm btn-outline-danger rounded-0" id="diary-empty-see">Vaciar tabla</button>
						</td>
					</tr>
				</thead>
				<tbody id="table-body-noti">
					<tr id="alert-delete-noti"></tr>
				</tbody>
			</table>
		</div>

		</div>
	</div>
</div>