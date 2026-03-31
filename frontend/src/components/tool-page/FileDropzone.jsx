import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, FileText, Image, File, GripVertical, Plus, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './FileDropzone.css';

function formatSize(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

function getFileIcon(file) {
  if (file.type === 'application/pdf') return FileText;
  if (file.type?.startsWith('image/')) return Image;
  return File;
}

export default function FileDropzone({ toolMeta, files, setFiles, toolColor }) {
  const [dragActive, setDragActive] = useState(false);

  const onDrop = useCallback((accepted, rejected) => {
    if (rejected.length > 0) return;
    if (toolMeta.multiFile) {
      setFiles(prev => [...prev, ...accepted].slice(0, toolMeta.maxFiles));
    } else {
      setFiles(accepted.slice(0, 1));
    }
  }, [toolMeta, setFiles]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: toolMeta.acceptedTypes,
    maxSize: toolMeta.maxSizeMB * 1024 * 1024,
    maxFiles: toolMeta.maxFiles,
    multiple: toolMeta.multiFile,
    onDragEnter: () => setDragActive(true),
    onDragLeave: () => setDragActive(false),
  });

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const hasFiles = files.length > 0;

  return (
    <div className="dropzone-wrapper">
      {!hasFiles ? (
        <div
          {...getRootProps()}
          className={`dropzone ${isDragActive ? 'dropzone--active' : ''}`}
          style={{ '--dz-color': toolColor }}
        >
          <input {...getInputProps()} />
          <div className="dropzone__border" />

          <motion.div
            className="dropzone__icon-wrapper"
            style={{ position: 'relative', width: 80, height: 80, margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            animate={isDragActive ? "active" : "idle"}
          >
            {/* Animated dotted circle behind the icon */}
            <motion.svg width="80" height="80" viewBox="0 0 100 100" style={{ position: 'absolute', top: 0, left: 0 }}
              variants={{
                idle: { rotate: 0 },
                active: { rotate: 180, scale: 1.1 }
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <motion.circle 
                cx="50" cy="50" r="48" 
                fill="none" 
                stroke={toolColor || "currentColor"} 
                strokeWidth="2"
                strokeDasharray="8 8"
                variants={{
                  idle: { opacity: 0.3 },
                  active: { opacity: 0.8, strokeWidth: 3 }
                }}
              />
            </motion.svg>
            
            {/* Core Icon */}
            <motion.div
              variants={{
                idle: { y: 0, scale: 1 },
                active: { y: 6, scale: 1.2 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Upload size={36} color={toolColor || "currentColor"} strokeWidth={1.5} />
            </motion.div>
          </motion.div>

          <p className="dropzone__title">
            {isDragActive ? 'Release to upload' : 'Drop your files here'}
          </p>
          <p className="dropzone__subtitle">or click to browse</p>

          <div className="dropzone__info">
            Max {toolMeta.maxSizeMB}MB per file
            {toolMeta.multiFile && ` · Up to ${toolMeta.maxFiles} files`}
          </div>
        </div>
      ) : (
        <div className="dropzone-files">
          <div className="dropzone-files__header">
            <span className="dropzone-files__count">
              {files.length} {files.length === 1 ? 'file' : 'files'} selected
            </span>
          </div>

          <AnimatePresence mode="popLayout">
            {files.map((file, i) => {
              const FIcon = getFileIcon(file);
              return (
                <motion.div
                  key={file.name + i}
                  className="dropzone-file"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.25 }}
                  layout
                >
                  {toolMeta.multiFile && (
                    <GripVertical size={16} className="dropzone-file__grip" />
                  )}
                  <div className="dropzone-file__icon" style={{ color: toolColor }}>
                    <FIcon size={20} />
                  </div>
                  <div className="dropzone-file__info">
                    <span className="dropzone-file__name">{file.name}</span>
                    <span className="dropzone-file__size">{formatSize(file.size)}</span>
                  </div>
                  <button
                    className="dropzone-file__remove"
                    onClick={() => removeFile(i)}
                    aria-label={`Remove ${file.name}`}
                  >
                    <X size={16} />
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {toolMeta.multiFile && files.length < toolMeta.maxFiles && (
            <div {...getRootProps()} className="dropzone-add">
              <input {...getInputProps()} />
              <Plus size={16} />
              <span>Add more files</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
