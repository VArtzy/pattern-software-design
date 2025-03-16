import nfs from 'fs'
import path from 'path'
import FsProxy from './fsProxy.js'

const fs = new FsProxy(nfs)

// const txtFile = path.join('readme.txt')
const mdFile = path.join('readme.md')

const res = (error, content) => {
    if (error) {
        console.log('\x07')
        throw Error(error)
    }

    console.log('reading file...')
    console.log(content)
}

// fs.readFile(txtFile, 'utf8', res)
fs.readFile(mdFile, 'utf8', res)
