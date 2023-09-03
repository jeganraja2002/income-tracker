	let Income = document.getElementById("income")
	let append = document.getElementById("append")
	let history = document.getElementById("history")
	let name = document.getElementById("name")
	let amount = document.getElementById("amount")	
	let balance = document.getElementById("balance")
	let sup = document.getElementById("sup")
	var save = 0
	let count= 0
	let sum = 0
	let incomesave = 0
	let total = 0
	let balancetotal=0
	let store=[]

		sup.innerHTML = "$0.00"
		balance.innerHTML = "$0.00"	
		income.innerHTML ="$0.00"

			name.style.border="1px solid transparent"
			amount.style.border="1px solid transparent"
			name.style.transition="all .3s"
			amount.style.transition="all .3s"



	function button() {
	
		if (name.value!=""&&amount.value!="") {

				if(amount.value>0||amount.value<0) {

				let randomId = Math.floor(Math.random()*(1234567890-1000000000)+1000000000)
					
					let transfer={id:randomId,name:name.value,value:amount.value}
					store.push(transfer)
					sessionStorage.setItem("jegan",JSON.stringify(store))	
					
					let div = document.createElement("div")
						div.setAttribute("class","d-flex justify-content-between shadow p-2 fs-5 rounded mt-3 align-items-center hover-visible")
						div.classList.add("anime")
						append.append(div)

					let span = document.createElement("span")
						div.append(span)
						span.innerHTML=name.value

					let span1 = document.createElement("span")
						div.append(span1)
						span1.innerHTML = amount.value

					let i = document.createElement("i")
							i.setAttribute("class","bi bi-x-circle-fill fs-4 text-danger visible ")
							div.append(i)

						i.addEventListener("click",function () {
							trash(transfer.id)
						})

						function trash(id) {
						let get = JSON.parse(sessionStorage.getItem("jegan"))

							div.classList.remove("anime")
							div.classList.add("anime1")
							setTimeout(()=>{
							append.removeChild(div)
							},400)

							let fill=get.map((e)=>{
								if(e.id==id){

									if (e.value>0) {

									let adding ="-"
										Income.innerHTML=`$ ${incomesave+parseInt(adding+e.value)}.00`
										incomesave=incomesave+parseInt(adding+e.value)
	
										balance.innerHTML =`$ ${save+parseInt(adding+e.value)}.00`
										save=save+parseInt(adding+e.value)		
									}

									else if(e.value<0){

										balance.innerHTML =`$ ${save-parseInt(e.value)}.00`
										save=save-parseInt(e.value)

										sup.innerHTML=`$ ${total-e.value}.00`
										total=total-e.value
									}
								}
							})

						}

		
						
					if (amount.value>=0) {
			
						save += parseInt(amount.value)
						incomesave+= parseInt(amount.value)
						balance.innerHTML = `$ ${save}.00`
						div.style.borderRight="5px solid limegreen"
						span1.innerHTML = "+"+amount.value
						Income.innerHTML=  `$ ${incomesave}.00`
					}

					
					else if(amount.value<0){
						sum=parseInt(amount.value)
						total+=parseInt(amount.value)						
						sup.innerHTML=total
						balancetotal=save+sum
						balance.innerHTML =`$ ${balancetotal}`		
						div.style.borderRight="5px solid red"
						save=balancetotal
					}

					name.style.border="transparent"
					amount.style.border="transparent"
					name.style.transition="all .3s"
					amount.style.transition="all .3s"
					name.value=""
					amount.value = ""

				}

				else{alert(" AMOUNT only number type")}

		}

		else if(name.value==""&&amount.value==""){
			name.style.border="1px solid red"
			amount.style.border="1px solid red"
			}

		else if(amount.value==""){
			amount.style.border="1px solid red"
			name.style.border="none"
		}

		else if(name.value==""){
			name.style.border="1px solid red"
			amount.style.border="none"
			}


	}

