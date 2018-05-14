import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	MUSICALNOTES = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#']
	SCALETYPES = ['Maior','Menor']
	FRETS = Array.from(Array(22).keys())
	TUNNING = ["E","B","G","D","A","E"]

	scale = {key: '', type:'', notes: []}

	constructor(){
		/*
		var notes = {
			e: ['E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E'],
			a: ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#',"A"],
			d: ['D','D#','E','F','F#','G','G#','A','A#','B','C','C#','D'],
			g: ['G','G#','A','A#','B','C','C#','D','D#','E','F','F#','G'],
			b: ['B','C','C#','D','D#','E','F','F#','G','G#','A','A#','B']
		}

		for (var i=0; i < notes.e.length; i++){
			$('.mask.low-e ul').append('<li note='+notes.e[i]+'>'+notes.e[i]+'</li>')
			$('.mask.a ul').append('<li note='+notes.a[i]+'>'+notes.a[i]+'</li>')
			$('.mask.d ul').append('<li note='+notes.d[i]+'>'+notes.d[i]+'</li>')
			$('.mask.g ul').append('<li note='+notes.g[i]+'>'+notes.g[i]+'</li>')
			$('.mask.b ul').append('<li note='+notes.b[i]+'>'+notes.b[i]+'</li>')
			$('.mask.high-e ul').append('<li note='+notes.e[i]+'>'+notes.e[i]+'</li>')
		}
		*/
	}
	ngOnInit(){}

	majorScale(key){
		let notes = []
		let start = this.MUSICALNOTES.findIndex(notes => notes===key)
		// T T ST T T T ST
		notes.push(this.MUSICALNOTES[start])
		notes.push(this.MUSICALNOTES[(start+2)%12])
		notes.push(this.MUSICALNOTES[(start+4)%12])
		notes.push(this.MUSICALNOTES[(start+5)%12])
		notes.push(this.MUSICALNOTES[(start+7)%12])
		notes.push(this.MUSICALNOTES[(start+9)%12])
		notes.push(this.MUSICALNOTES[(start+11)%12])
		return notes
	}

	minorScale(key){
		let notes = []
		let start = this.MUSICALNOTES.findIndex(notes => notes===key)
		// T ST T T ST T T
		notes.push(this.MUSICALNOTES[start])
		notes.push(this.MUSICALNOTES[(start+2)%12])
		notes.push(this.MUSICALNOTES[(start+3)%12])
		notes.push(this.MUSICALNOTES[(start+5)%12])
		notes.push(this.MUSICALNOTES[(start+7)%12])
		notes.push(this.MUSICALNOTES[(start+8)%12])
		notes.push(this.MUSICALNOTES[(start+10)%12])
		return notes
	}

	tryToCreate(value,menu){
		this.scale[menu] = value

		if(this.scale.key!='' && this.scale.type!=''){
			if(this.scale.type=='Maior')
				this.scale.notes = this.majorScale(this.scale.key)
			else if(this.scale.type=='Menor')
				this.scale.notes = this.minorScale(this.scale.key)				
		}
	}

	isNoteOnScale(note){
		if(this.scale.notes.includes(note))
			return true
		else 
			return false
	}
	stringNote(fret,key){
		let start = this.MUSICALNOTES.findIndex(notes => notes===key)
		return this.MUSICALNOTES[(start+fret)%12]
	}
}