

function Pagination(limit, currentPage, totalCount){
  this.limit = 10;
  this.currentPage = 1;
  this.skip = 0;
  if(limit){
    this.limit = limit;
  }
  if(currentPage){
    this.currentPage = currentPage;
  }
  if(totalCount){
    this.totalCount = totalCount;
  }

}
Pagination.prototype.setTotalCount = function(totalCount){
  this.totalCount = totalCount;
}

Pagination.prototype.prev = function(cb){
  if(this.isFirst()){
    return;
  }
  this.currentPage--;
  this.currentPage = this.currentPage <=0 ? 1 : this.currentPage;
  this.skip =  ( this.currentPage - 1 ) * this.limit;
  cb({"skip":this.skip, "limit":this.limit});
}

Pagination.prototype.next = function(cb){
  if(this.isLast()){
    return;
  }

  this.currentPage++;
  if( this.currentPage >= Math.ceil(this.totalCount / this.limit)){
    this.currentPage = Math.ceil(this.totalCount / this.limit);
  }
  this.skip =  ( this.currentPage - 1 ) * this.limit
  cb({"skip":this.skip, "limit":this.limit});
}

Pagination.prototype.first = function(cb){
  if(this.isFirst()){
    return;
  }
  this.currentPage = 1;
  this.skip =  0;
  cb({"skip":this.skip, "limit":this.limit});
}

Pagination.prototype.last = function(cb){
  if(this.isLast()){
    return;
  }
  this.currentPage = Math.ceil(this.totalCount / this.limit);
  this.skip =  ( this.currentPage - 1 ) * this.limit
  cb({"skip":this.skip, "limit":this.limit});
}

Pagination.prototype.isFirst = function(){
  return this.currentPage == 1 ? true : false;
}

Pagination.prototype.isLast = function(){
  return this.currentPage == Math.ceil(this.totalCount / this.limit) ? true : false;
}
