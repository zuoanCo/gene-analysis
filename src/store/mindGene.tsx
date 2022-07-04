import { Gene } from '@/models';
import { makeAutoObservable } from 'mobx'

class MindGene {
    constructor() {
        makeAutoObservable(this)
    }

    gene = {}


    get currentGene() {
        return this.gene
    }

    setGene(gene:Gene) {
        this.gene = gene
    }

    removeGene() {
        this.gene = {}
    }
}

// const mindGene = new MindGene()

export default MindGene