import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import clsx from 'clsx'
import { publishVideo, uploadVideo } from '../../services'
import styles from './styles.module.css'

export default function Upload () {
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState(false)
  const [videoSrc, setVideoSrc] = useState('')

  const onDrop = async (files) => {
    const [file] = files
    setUploading(true)
    const [error, fileUrl] = await uploadVideo({ videoFile: file })
    if (error) return console.error(error)
    if (fileUrl) {
      console.log(fileUrl)
      setVideoSrc(fileUrl)
      setUploading(false)
      setUploaded(true)
    }
  }

  const {
    isDragAccept,
    isDragReject,
    getRootProps,
    getInputProps
  } = useDropzone({
    disabled: uploading || uploaded,
    maxFiles: 1,
    accept: {
      'video/mp4': ['.mp4'],
      'video/webm': ['.webm'],
      'video/x-m4v': ['.m4v']
    },
    onDrop
  })

  const dndClassNames = clsx(styles.dnd, {
    [styles.uploading]: uploading,
    [styles.uploaded]: uploaded,
    [styles.dndReject]: isDragReject,
    [styles.dndAccept]: isDragAccept
  })

  const renderDndContent = () => {
    if (uploaded) return <h5>Archivo cargado con exito!</h5>
    if (uploading) return <h5>Subiendo...</h5>
    if (isDragReject) return <h5>Archivo no soportado</h5>
    if (isDragAccept) return <h5>¡Suelta el archivo para subirlo!</h5>

    return (
      <>
        <h4>Selecciona el video para cargar</h4>
        <h5>O arrastra y suelta un archivo</h5>
        <ul className={styles.dndList}>
          <li>MP4 O WebM</li>
          <li>Resolucuión de al menos 720x1280</li>
          <li>Hasta 180 segundos</li>
        </ul>
      </>
    )
  }

  const handleSubmit = (evt) => {
    const description = evt.target.description.value
    publishVideo({ videoSrc, description })
  }

  return (
    <div className={styles.upload}>
      <h1>Cargar video</h1>
      <p>Este video se publicará en tu perfil</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div className={dndClassNames}>
            <img
              src='https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-us/ies/creator_center/svgs/cloud-icon1.ecf0bf2b.svg'
              width='49'
            />
            {renderDndContent()}
          </div>
        </div>

        <label htmlFor=''>
          Leyenda
          <input name='description' />
        </label>

        <button>
          Publicar
        </button>
      </form>
    </div>
  )
}
