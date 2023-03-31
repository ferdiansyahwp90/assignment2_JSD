function process_argv() {
    const { argv } = process;
    const result = studentStatus(argv[2], argv[3]);

    return result;
}

function studentStatus(name, studentId) {
    let prodi = '';
    let fakultas = '';
    let tahun = '';

    //TAHUN
    for (let i = 0; i < studentId?.length; i++) {
        //first => 2
        if(studentId.substring(2,6) == ('2000')){
            console.log(tahun = '2000')
            break;
        }else if(studentId.substring(2,6) == ('2008')){
            console.log(tahun = '2008')
            break;
        }else if(studentId.substring(2,6) == ('2010')){
            console.log(tahun = '2010')
            break;
        }else if(studentId.substring(2,6) == ('2011')){
            console.log(tahun = '2011')
            break;
        }else if(studentId.substring(2,6) == ('2012')){
            console.log(tahun = '2012')
            break;
        }else if(studentId.substring(2,6) == ('2013')){
            console.log(tahun = '2013')
            break;
        }else if(studentId.substring(2,6) == ('2014')){
            console.log(tahun = '2014')
            break;
        }else if(studentId.substring(2,6) == ('2016')){
            console.log(tahun = '2016')
            break;
        }else if(studentId.substring(2,6) == ('2018')){
            console.log(tahun = '2018')
            break;
        }else if(studentId.substring(2,6) == ('2022')){
            console.log(tahun = '2022')
            break;
        }else if(studentId.substring(2,6) == ('2023')){
            console.log(tahun = '2023')
            break;
        }

        //FIRST => 4
        if(studentId.substring(4,8) == ('2000')){
            console.log(tahun = '2000')
            break;
        }else if(studentId.substring(4,8) == ('2008')){
            console.log(tahun = '2008')
            break;
        }else if(studentId.substring(4,8) == ('2010')){
            console.log(tahun = '2010')
            break;
        }else if(studentId.substring(4,8) == ('2011')){
            console.log(tahun = '2011')
            break;
        }else if(studentId.substring(4,8) == ('2012')){
            console.log(tahun = '2012')
            break;
        }else if(studentId.substring(4,8) == ('2013')){
            console.log(tahun = '2013')
            break;
        }else if(studentId.substring(4,8) == ('2014')){
            console.log(tahun = '2014')
            break;
        }else if(studentId.substring(4,8) == ('2016')){
            console.log(tahun = '2016')
            break;
        }else if(studentId.substring(4,8) == ('2018')){
            console.log(tahun = '2018')
            break;
        }else if(studentId.substring(4,8) == ('2022')){
            console.log(tahun = '2022')
            break;
        }else if(studentId.substring(4,8) == ('2023')){
            console.log(tahun = '2023')
            break;    
        }

        //FIRST => 5
        if(studentId.substring(5,9) == ('2000')){
            console.log(tahun = '2000')
            break;
        }else if(studentId.substring(5,9) == ('2008')){
            console.log(tahun = '2008')
            break;
        }else if(studentId.substring(5,9) == ('2010')){
            console.log(tahun = '2010')
            break;
        }else if(studentId.substring(5,9) == ('2011')){
            console.log(tahun = '2011')
            break;
        }else if(studentId.substring(5,9) == ('2012')){
            console.log(tahun = '2012')
            break;
        }else if(studentId.substring(5,9) == ('2013')){
            console.log(tahun = '2013')
            break;
        }else if(studentId.substring(5,9) == ('2014')){
            console.log(tahun = '2014')
            break;
        }else if(studentId.substring(5,9) == ('2016')){
            console.log(tahun = '2016')
            break;
        }else if(studentId.substring(5,9) == ('2018')){
            console.log(tahun = '2018')
            break;
        }else if(studentId.substring(5,9) == ('2022')){
            console.log(tahun = '2022')
            break;
        }else if(studentId.substring(5,9) == ('2023')){
            console.log(tahun = '2023')
            break;  
        }else{   
            console.log('invalid tahun')
            break;
        }
    }
    
    //FAKULTAS
    for (let i = 0; i < studentId?.length; i++) {
        if(studentId.substring(0,2) == "FE"){
            console.log(fakultas = 'Fakultas Ekonomi')
            break;
        }else if(studentId.substring(0,4) == "FTIS"){
            console.log(fakultas = 'Fakultas Teknologi Informasi dan Sains')
            break;
        }else if (studentId.substring(0,5) == "FISIP"){
            console.log(fakultas = 'Fakultas Ilmu Sosial dan Politik')
            break;
        }else if(studentId.substring(0,2) == "FT"){
            console.log(fakultas = 'Fakultas Teknik')
            break;
        }
    }

    //PROGRAM STUDI
    for (let i = 0; i < studentId?.length; i++) {
        //first => 2
        if(studentId.substring(6,8) == '21'){
            console.log(prodi = 'Ekonomi');
            break;
        }else if(studentId.substring(6,8) == '22'){
            console.log(prodi = 'Manajemen');
            break;
        }else if(studentId.substring(6,8) == '23'){
            console.log(prodi = 'Akuntansi');
            break;
        }else if(studentId.substring(6,8) == '31'){
            console.log(prodi = 'Administrasi Publik');
            break;
        }else if(studentId.substring(6,8) == '32'){
            console.log(prodi = 'Administrasi Bisnis');
            break;
        }else if(studentId.substring(6,8) == '33'){
            console.log(prodi = 'Hubungan Internasional');
            break;
        }else if(studentId.substring(6,8) == '41'){
            console.log(prodi = 'Teknik Sipil');
            break;
        }else if(studentId.substring(6,8) == '42'){
            console.log(prodi = 'Arsitektur');
            break;
        }else if(studentId.substring(6,8) == '51'){
            console.log(prodi = 'Matematika');
            break;
        }else if(studentId.substring(6,8) == '52'){
            console.log(prodi = 'Fisika');
            break;
        }else if(studentId.substring(6,8) == '53'){
            console.log(prodi = 'Informatika');
            break;
        }
        
        //first => 4
        if(studentId.substring(8,10) == '21'){
            console.log(prodi = 'Ekonomi');
            break;
        }else if(studentId.substring(8,10) == '22'){
            console.log(prodi = 'Manajemen');
            break;
        }else if(studentId.substring(8,10) == '23'){
            console.log(prodi = 'Akuntansi');
            break;
        }else if(studentId.substring(8,10) == '31'){
            console.log(prodi = 'Administrasi Publik');
            break;
        }else if(studentId.substring(8,10) == '32'){
            console.log(prodi = 'Administrasi Bisnis');
            break;
        }else if(studentId.substring(8,10) == '33'){
            console.log(prodi = 'Hubungan Internasional');
            break;
        }else if(studentId.substring(8,10) == '41'){
            console.log(prodi = 'Teknik Sipil');
            break;
        }else if(studentId.substring(8,10) == '42'){
            console.log(prodi = 'Arsitektur');
            break;
        }else if(studentId.substring(8,10) == '51'){
            console.log(prodi = 'Matematika');
            break;
        }else if(studentId.substring(8,10) == '52'){
            console.log(prodi = 'Fisika');
            break;
        }else if(studentId.substring(8,10) == '53'){
            console.log(prodi = 'Informatika');
            break;
        }
    }
    for(let i = 0; i < studentId?.length; i++){
        //first => 5
        if(studentId.substring(9,11) == '21'){
            console.log(prodi = 'Ekonomi');
            break;
        }else if(studentId.substring(9,11) == '22'){
            console.log(prodi = 'Manajemen');
            break;
        }else if(studentId.substring(9,11) == '23'){
            console.log(prodi = 'Akuntansi');
            break;
        }else if(studentId.substring(9,11) == '31'){
            console.log(prodi = 'Administrasi Publik');
            break;
        }else if(studentId.substring(9,11) == '32'){
            console.log(prodi = 'Administrasi Bisnis');
            break;
        }else if(studentId.substring(9,11) == '33'){
            console.log(prodi = 'Hubungan Internasional');
            break;
        }else if(studentId.substring(9,11) == '41'){
            console.log(prodi = 'Teknik Sipil');
            break;
        }else if(studentId.substring(9,11) == '42'){
            console.log(prodi = 'Arsitektur');
            break;
        }else if(studentId.substring(9,11) == '51'){
            console.log(prodi = 'Matematika');
            break;
        }else if(studentId.substring(9,11) == '52'){
            console.log(prodi = 'Fisika');
            break;
        }else if(studentId.substring(9,11) == '53'){
            console.log(prodi = 'Informatika');
            break;
        }
    }

    return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi ${prodi} pada ${fakultas} sejak tahun ${tahun}.`;

}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = studentStatus;
