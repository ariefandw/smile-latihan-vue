<script setup>

</script>

<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Dashboard</div>
                
                <div class="card-body">
                    <div class="input-group mb-3">
                        <input type="text" name="q" class="form-control" placeholder="Cari">
                        <button type="submit" class="input-group-text text-white bg-primary"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>

                    <button class="btn btn-success btn-sm" href=""><i class="fa-solid fa-plus"></i></button>
                    <table class="table table-sm">
                        <tr>
                            <th>ID</th>
                            <th>Judul</th>
                            <th>Pesan</th>
                            <th>Kategori</th>
                            <th>User</th>
                            <th>Aksi</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <div class="btn-group btn-group-sm" role="group">
                                    <button class="btn btn-info" href=""><i class="fa-solid fa-eye"></i></button> 
                                    <button class="btn btn-warning" href=""><i class="fa-solid fa-pencil"></i></button> 
                                    <button class="btn btn-danger" type="submit"><i class="fa-solid fa-times"></i></button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</template>